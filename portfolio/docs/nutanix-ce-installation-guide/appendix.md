---
sidebar_position: 7
id: Appendix
slug: appendix
---

# Appendix

## Glossary and Acronyms

| Term               | Definition                                                                                                                                                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AHCI               | Advanced Host Controller Interface. A technical standard defined by Intel that specifies the operation of Serial ATA (SATA) host controllers in a non-implementation-specific manner in its motherboard chipsets (Intel, Inc., n.d.).           |
| Boot volume        | Refers to the partition on a hard disk containing the operating system and its dependent files.                                                                                                                                                 |
| CVM                | Controller Virtual Machine - The Nutanix CVM is what runs the Nutanix software and serves all the I/O operations for the hypervisor and all VMs running on that host (Poitras, 2021).                                                           |
| Deduplication      | A technique used for eliminating duplicate copies of data. Deduplication is used to ensure more efficient use of available storage.                                                                                                             |
| HA                 | High-Availability. Used to improve uptime for a system. Nutanix HA is achieved with the use of redundant nodes that ensure continued uptime even in the event of a node failure.                                                                |
| HCI                | Hyper-converged infrastructure. Software-defined IT infrastructure that abstracts away all elements of conventional systems, such as the hypervisor, storage, and networking. The end goal is a system that is simpler to operate and maintain. |
| Hypervisor         | A piece of computer software that runs virtual machines.                                                                                                                                                                                        |
| Hypervisor, Type 1 | A hypervisor that is installed directly onto a host server. A host server running a type 1 hypervisor is a dedicated virtualization host that cannot be used for any other purpose.                                                             |
| NVMe-based drives  | Nonvolatile memory express. A storage access and transport protocol for flash and next-generation solid-state drives.                                                                                                                           |

## Network Information Checklist

| Description                                     | IP Address |
| ----------------------------------------------- | ---------- |
| Node IP                                         |            |
| Node subnet mask                                |            |
| Node default gateway                            |            |
| Controller VM IP address                        |            |
| Controller VM subnet mask                       |            |
| Controller VM default gateway                   |            |
| External IP (if cluster has more than one node) |            |

Source: Nutanix. (2020). “Getting Started with Nutanix Community Edition”

## Default Nutanix Passwords

| Target                              | Username | Password   |
| ----------------------------------- | -------- | ---------- |
| Controller VM (Nutanix Web Console) | admin    | Nutanix/4u |
| Nutanix node                        | root     | nutanix/4u |
| Controller VM (SSH client)          | nutanix  | nutanix/4u |

Source: Nutanix. (2020). “Getting Started with Nutanix Community Edition”

## How to Change Nutanix Passwords

Use the commands in the table below to change the Nutanix passwords from their default:

| Target        | Username | Command                                                                                                                                                                                     | Note                                |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Controller VM | nutanix  | `sudo passwd nutanix`                                                                                                                                                                       |                                     |
| Controller VM | admin    | (Changed during post-deployment configuration)                                                                                                                                              | Can be changed in the Prism Console |
| Nutanix node  | root     | (See [this article](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA00e000000LKXcCAO) for instructions on changing the root password on all nodes in your cluster at once) |                                     |
