resource "yandex_lb_network_load_balancer" "landing_lb" {
  name = "landing-load-balancer"
  
  listener {
    name        = "landing-listener"
    port        = 80
    target_port = 3000
    external_address_spec {
      ip_version = "ipv4"
    }
  }
  
  attached_target_group {
    target_group_id = yandex_compute_instance_group.landing_ig.load_balancer.0.target_group_id
    
    healthcheck {
      name = "http"
      http_options {
        port = 3000
        path = "/api/health"
      }
    }
  }
}