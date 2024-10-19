---
sidebar_position: 1
id: Hardware
slug: hardware
---

# Hardware

## Hardware Recommendations

The table below shows Nutanix hardware recommendations for Community Edition:

_Table 1: Hardware Recommendations_

| Component                        | Nutanix Recommendation                                                                                                                                                          | Notes                                                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Central Processing Unit (CPU)    | Intel CPUs with VT-x support                                                                                                                                                    | Four-core minimum because two cores are dedicated to the CVM.                                                                                            |
| System memory                    | 16 GB minimum; 32 GB or higher recommended                                                                                                                                      | 32 GB or greater recommended for AOS features such as deduplication, compression, or more user VMs.                                                      |
| Network interface card (NIC)     | Intel=based NIC                                                                                                                                                                 |                                                                                                                                                          |
| Host bus adapter (HBA)           | Community Edition supports Advanced Host Controller Interface (AHCI), SATA, or LSI controller with:<br/> - IT mode <br/> - IR mode with pass-through<br/> - IR mode with RAID-0 |                                                                                                                                                          |
| Storage devices (all drives)     | Maximum number of SSD/HDD drives per node is four                                                                                                                               |                                                                                                                                                          |
| Storage devices (hot tier flash) | Single 200 GB SSD or greater                                                                                                                                                    | Place SSD(s) before HDDs (commonly Bay 0 or Bay 1). The first bay number varies depending on manufacturer labeling; NVMe-based drives are not supported. |
| Boot device                      | One 8 GB capacity device per node. It can be an external or internal device.                                                                                                    | Nutanix has successfully tested and used external USB drives and internal devices such as SATA DOMs. USB 3.0 media recommended.                          |
| Firmware                         | Consider updating the firmware for any hardware you plan to use to the latest version recommended by the hardware vendor.                                                       |

_Source: Nutanix. (2020). "Getting Started with Nutanix Community Edition"_

## Cluster Sizing

Community Edition supports up to four (4) nodes in a single cluster. Nutanix recommends deploying a three-node cluster to reap the most benefit from the platform. If you deploy a single node cluster, you will not be able to take advantage of Nutanix’s high-availability (HA) features.

:::danger[You can't extend a one or two node cluster]

Moving from a one or two node cluster requires destroying the existing cluster and all VMs. Discuss these limitations with the customer before recommending a cluster size.

:::
