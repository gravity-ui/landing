resource "yandex_alb_backend_group" "landing_bg" {
  name = "landing-backend-group"

  http_backend {
    name             = "landing-http-backend"
    weight           = 1
    port             = 3000
    target_group_ids = [yandex_compute_instance_group.landing_ig.application_load_balancer[0].target_group_id]
    load_balancing_config {
      panic_threshold = 50
    }
    healthcheck {
      interval            = "3s"
      timeout             = "2s"
      healthy_threshold   = 2
      unhealthy_threshold = 3
      http_healthcheck {
        path = "/health"
      }
      healthcheck_port = 3000
    }
  }
}

resource "yandex_alb_http_router" "landing_router" {
  name = "landing-http-router"
}

resource "yandex_alb_virtual_host" "landing_virtual_host" {
  name           = "landing-virtual-host"
  http_router_id = yandex_alb_http_router.landing_router.id

  authority = ["gravity-ui.com"]

  route {
    name = "landing-route"
    http_route {
      http_route_action {
        backend_group_id = yandex_alb_backend_group.landing_bg.id
        timeout          = "60s"
      }
    }
  }
}

resource "yandex_cm_certificate" "gravity_ui_cert" {
  name    = "gravity-ui-certificate"
  domains = ["gravity-ui.com"]

  managed {
    challenge_type = "DNS_CNAME"
  }
}

resource "yandex_vpc_address" "landing_alb_ip" {
  name = "landing-alb-ip"
  external_ipv4_address {
    zone_id = "ru-central1-d"
  }
}

resource "yandex_alb_load_balancer" "landing_alb" {
  name = "landing-application-load-balancer"

  network_id = yandex_vpc_network.network.id

  allocation_policy {
    location {
      zone_id   = "ru-central1-a"
      subnet_id = yandex_vpc_subnet.subnet_a.id
    }
    location {
      zone_id   = "ru-central1-b"
      subnet_id = yandex_vpc_subnet.subnet_b.id
    }
    location {
      zone_id   = "ru-central1-d"
      subnet_id = yandex_vpc_subnet.subnet_d.id
    }
  }

  listener {
    name = "landing-http-listener"
    endpoint {
      address {
        external_ipv4_address {
          address = yandex_vpc_address.landing_alb_ip.external_ipv4_address[0].address
        }
      }
      ports = [80]
    }
    http {
      redirects {
        http_to_https = true
      }
    }
  }

  listener {
    name = "landing-https-listener"
    endpoint {
      address {
        external_ipv4_address {
          address = yandex_vpc_address.landing_alb_ip.external_ipv4_address[0].address
        }
      }
      ports = [443]
    }
    tls {
      default_handler {
        http_handler {
          http_router_id = yandex_alb_http_router.landing_router.id
        }
        certificate_ids = [yandex_cm_certificate.gravity_ui_cert.id]
      }
    }
  }
}

output "alb_public_ip" {
  description = "Public IP address of the Application Load Balancer"
  value       = yandex_alb_load_balancer.landing_alb.listener.0.endpoint.0.address.0.external_ipv4_address.0.address
}
