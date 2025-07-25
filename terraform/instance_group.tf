data "yandex_compute_image" "container_optimized_image" {
  family = "container-optimized-image"
}

resource "yandex_compute_instance_group" "landing_ig" {
  name               = "landing-instance-group"
  folder_id          = var.yc_folder_id
  service_account_id = yandex_iam_service_account.ig_sa.id

  instance_template {
    platform_id        = "standard-v3"
    service_account_id = yandex_iam_service_account.instance_sa.id

    resources {
      cores         = var.vm_resources.cores
      memory        = var.vm_resources.memory
      core_fraction = 100
    }

    boot_disk {
      mode = "READ_WRITE"
      initialize_params {
        image_id = data.yandex_compute_image.container_optimized_image.id
        size     = var.vm_resources.disk
      }
    }

    network_interface {
      network_id = yandex_vpc_network.network.id
      subnet_ids = [
        yandex_vpc_subnet.subnet_a.id,
        yandex_vpc_subnet.subnet_b.id,
        yandex_vpc_subnet.subnet_d.id
      ]
      nat                = true
      security_group_ids = [yandex_vpc_security_group.landing_sg.id]
    }

    metadata = {
      enable-oslogin = true
      docker-container-declaration = yamlencode({
        spec = {
          containers = [{
            image = var.container_image
            name  = "landing"
            ports = [{
              containerPort = 3000
              hostPort      = 3000
            }]
          }]
        }
      })
      ssh-keys = "ubuntu:${var.ssh_public_key}"
    }
  }

  scale_policy {
    fixed_scale {
      size = 3
    }
  }

  allocation_policy {
    zones = ["ru-central1-a", "ru-central1-b", "ru-central1-d"]
  }

  deploy_policy {
    max_unavailable = 0
    max_expansion   = 3
  }

  health_check {
    http_options {
      port = 3000
      path = "/health"
    }
    interval            = 3
    timeout             = 2
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  application_load_balancer {
    target_group_name = "landing-target-group"
  }
}

resource "yandex_iam_service_account" "ig_sa" {
  name        = "landing-ig-sa"
  description = "Service account for landing instance group"
}

resource "yandex_resourcemanager_folder_iam_member" "ig_sa_roles" {
  folder_id = var.yc_folder_id
  role      = "editor"
  member    = "serviceAccount:${yandex_iam_service_account.ig_sa.id}"
}

resource "yandex_iam_service_account" "instance_sa" {
  name        = "landing-instance-sa"
  description = "Service account for vm instance"
}

resource "yandex_resourcemanager_folder_iam_member" "instance_sa_role" {
  folder_id = var.yc_folder_id
  role      = "lockbox.payloadViewer"
  member    = "serviceAccount:${yandex_iam_service_account.instance_sa.id}"
}
