export const content = {
  hero: {
    name: "Naeem Arshad",
    title: "DevOps Engineer · Infrastructure as Code · Kubernetes",
    tagline: "I build the platforms teams ship on.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
  },
  about: {
    title: "About",
    summary: `DevOps Engineer based in Norderstedt, Germany with 17+ years of IT experience. 
Currently Senior DevOps Engineer at Risk Ident GmbH in Hamburg. Previously Linux DevOps Engineer 
at Saudi Authority for Data and AI (SDAIA), where I managed infrastructure serving 70,000+ users. 
Certified RHCSA and CKA with expertise in Kubernetes, Terraform, Ansible, and building scalable platforms.`,
  },
  skills: [
    {
      category: "Orchestration",
      items: ["Kubernetes (RKE, RKE2, Rancher)", "Helm", "ArgoCD", "Kustomize"],
    },
    {
      category: "IaC",
      items: ["Terraform", "Ansible", "Pulumi"],
    },
    {
      category: "CI/CD",
      items: ["GitLab CI/CD", "GitLab Administrator", "Jenkins"],
    },
    {
      category: "Monitoring",
      items: ["Prometheus", "Grafana", "Elastic Stack"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MariaDB", "MongoDB", "Kafka"],
    },
    {
      category: "Networking",
      items: ["Traefik", "NGINX", "HAProxy", "WireGuard", "Cloudflare Tunnel"],
    },
    {
      category: "Virtualization",
      items: ["Proxmox", "vCenter", "Red Hat Virtualization"],
    },
    {
      category: "Linux",
      items: ["Ubuntu", "Red Hat", "NixOS", "IDM", "Satellite"],
    },
    {
      category: "Cloud",
      items: ["AWS", "GCP", "OpenShift"],
    },
  ],
  experience: [
    {
      company: "Risk Ident GmbH",
      role: "Senior DevOps Engineer",
      period: "Aug 2024 - Present",
      description: "Writing Terraform modules for various providers. Developing & maintaining custom Helm charts and Ansible roles for vanilla Kubernetes clusters. Stack: Grafana, Prometheus, Elasticsearch, MongoDB.",
    },
    {
      company: "Saudi Authority for Data and AI (SDAIA)",
      role: "Linux DevOps Engineer",
      period: "May 2022 - Aug 2024",
      description: "DEEM Platform - Government cloud with 70,000+ users. Terraform infrastructure automation, Ansible configuration management, Helm charts, GitOps with ArgoCD, GitLab CI/CD. PostgreSQL clustering, Kubernetes cluster management, POCs for new technologies.",
    },
    {
      company: "Innovation LAB (Government)",
      role: "Linux DevOps Engineer",
      period: "Feb 2018 - May 2022",
      description: "Infrastructure for AI/ML workloads with 50+ GPU nodes. 50+ custom scripts, 100+ Ansible playbooks. Kubernetes with GPU nodes, vCenter with vGPU, Kafka/Spark clusters, Elastic Stack (HA multi-master), SSL automation with Let's Encrypt.",
    },
    {
      company: "Future Entertainment Works",
      role: "Linux System Administrator",
      period: "Jun 2007 - Feb 2018",
      description: "Data centers for Royal families. Linux server installation via kickstart/PXE, MariaDB, Nginx, Apache, NFS, DHCP. IPTV system for 400+ Set Top Boxes, 300+ live channels. Nagios monitoring.",
    },
  ],
  projects: [
    {
      name: "Risk Ident Infrastructure",
      description: "Terraform modules and custom Helm charts for Kubernetes-based fraud detection platform. Prometheus/Grafana monitoring integration.",
      tech: ["Terraform", "Helm", "Kubernetes", "Grafana"],
    },
    {
      name: "SDAIA High-Traffic Platform",
      description: "Designed and deployed RUST-based application behind Nginx reverse proxy, serving 70,000+ daily users with 1B+ requests/day. Kubernetes cluster management (120+ customers) with external CSI storage (NetAPP ONTAP).",
      tech: ["Nginx", "RUST", "Kubernetes", "NetAPP CSI"],
    },
    {
      name: "libvirt-k0s",
      description: "k0s Kubernetes cluster on libvirt/KVM with Calico CNI and Traefik ingress controller",
      tech: ["k0s", "Libvirt", "Calico", "Traefik"],
    },
  ],
  contact: {
    title: "Contact",
    description: "Interested in working together? Let's connect.",
    email: "naimarshad@gmail.com",
    github: "https://github.com/naimarshad",
    linkedin: "https://linkedin.com/in/naimarshad",
  },
};