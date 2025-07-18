terraform {
  required_providers {
    yandex = {
      source  = "yandex-cloud/yandex"
      version = "~> 0.84.0"
    }
  }
  
  backend "s3" {
    endpoint   = "storage.yandexcloud.net"
    bucket     = "landing-terraform-state"
    region     = "ru-central1"
    key        = "landing/terraform.tfstate"
    
    skip_region_validation      = true
    skip_credentials_validation = true
  }
}

provider "yandex" {
  service_account_key_file = var.yc_service_account_key_file
  cloud_id  = var.yc_cloud_id
  folder_id = var.yc_folder_id
  zone      = "ru-central1-a"
}
