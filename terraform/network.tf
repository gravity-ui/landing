resource "yandex_vpc_network" "network" {
  name = "landing-network"
}

resource "yandex_vpc_subnet" "subnet_a" {
  name           = "landing-subnet-a"
  zone           = "ru-central1-a"
  network_id     = yandex_vpc_network.network.id
  v4_cidr_blocks = ["10.1.0.0/24"]
}

resource "yandex_vpc_subnet" "subnet_b" {
  name           = "landing-subnet-b"
  zone           = "ru-central1-b"
  network_id     = yandex_vpc_network.network.id
  v4_cidr_blocks = ["10.2.0.0/24"]
}

resource "yandex_vpc_subnet" "subnet_d" {
  name           = "landing-subnet-d"
  zone           = "ru-central1-d"
  network_id     = yandex_vpc_network.network.id
  v4_cidr_blocks = ["10.3.0.0/24"]
}

resource "yandex_vpc_security_group" "landing_sg" {
  name        = "landing-security-group"
  description = "Security group for landing application"
  network_id  = yandex_vpc_network.network.id

  ingress {
    protocol       = "TCP"
    description    = "Allow SSH"
    port           = 22
    v4_cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol       = "TCP"
    description    = "Allow HTTP"
    port           = 80
    v4_cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol       = "TCP"
    description    = "Allow HTTPS"
    port           = 443
    v4_cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    predefined_target = "self_security_group"
    protocol          = "ANY"
  }
  
  ingress {
    port              = 3000
    predefined_target = "loadbalancer_healthchecks"
    protocol          = "TCP"
  }
  
  ingress {
    port     = 3000
    protocol = "TCP"
    v4_cidr_blocks = [
      "10.1.0.0/24",
      "10.2.0.0/24",
      "10.3.0.0/24",
    ]
  }

  egress {
    protocol       = "ANY"
    description    = "Allow all outgoing traffic"
    v4_cidr_blocks = ["0.0.0.0/0"]
  }
}
