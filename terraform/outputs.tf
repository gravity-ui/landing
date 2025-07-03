output "load_balancer_ip" {
  description = "Public IP address of the load balancer"
  value       = yandex_lb_network_load_balancer.landing_lb.listener.*.external_address_spec[0].*.address
}

output "instance_group_id" {
  description = "ID of the instance group"
  value       = yandex_compute_instance_group.landing_ig.id
}

output "service_account_id" {
  description = "ID of the service account"
  value       = yandex_iam_service_account.ig_sa.id
}