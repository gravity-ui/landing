variable "yc_token" {
  description = "Yandex Cloud API token"
  type        = string
  sensitive   = true
}

variable "yc_cloud_id" {
  description = "Yandex Cloud ID"
  type        = string
}

variable "yc_folder_id" {
  description = "Yandex Cloud Folder ID"
  type        = string
}

variable "container_image" {
  description = "Container image URL in GitHub Container Registry"
  type        = string
  default     = "ghcr.io/gravity-ui/landing:latest"
}

variable "vm_resources" {
  description = "VM resources configuration"
  type = object({
    cores  = number
    memory = number
    disk   = number
  })
  default = {
    cores  = 2
    memory = 4
    disk   = 20
  }
}

variable "ssh_public_key" {
  description = "Public SSH key for VM access"
  type        = string
  sensitive   = true
  default     = ""
}
