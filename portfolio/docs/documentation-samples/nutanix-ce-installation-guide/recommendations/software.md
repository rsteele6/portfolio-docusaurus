---
sidebar_position: 2
id: Software
slug: software
---

# Software

The customer must have a valid account on the [Next Community Edition forum](https://www.nutanix.com/products/register) to download the software, access most support resources, and activate the cluster.

:::note

The email account used to set up the account must be a business address. Public accounts like Gmail and Yahoo cannot be used.

:::

## Licensing

Ask your customer to sign up for a Next Community Edition account and register for software access by [visiting this link](https://www.nutanix.com/products/register).

## Obtaining the Software

After registration, download the software from the Next forum post entitled [“Nutanix Next Community Download Software”](https://next.nutanix.com/discussion-forum-14). The customer must be logged in to access this location (Nutanix, Inc., 2020).

## Preparing the Boot Device

The boot device (USB stick or SATA DOM) must be at least 8 GB as mentioned previously. Flashing the boot device with Nutanix software will destroy all pre-existing data on that drive.

You will need one boot device for each cluster node.

### Windows

You will need to use a third-party tool such as the open source [Win32DiskImager](https://win32diskimager.org/) to image your boot device(s) with the Nutanix ISO downloaded [earlier](#obtaining-the-software).

### Linux/Mac OS X

The following procedure was taken verbatim from Nutanix’s help article “Getting Started with Nutanix Community Edition:”

If you are using a Linux or Mac OS X environment, you can use the dd command to image the device:

```
dd if=ce.img of=/dev/sdX
```

where X is the USB drive letter.

**(Linux only)** To find the USB drive letter, check the output of this command:

```
for i in /dev/sd?; do udevadm info --query=all --name=$i; done
```

**(OS X only)** List any storage devices:

```
diskutil list
```

**(OS X only)** Show information about a specific device:

```
diskutil info /dev/X
```

where X is the USB drive.

**(OS X only)** For improved performance when imaging, specify a block size of 1 MB.
For example:

```
dd if=ce.img of=/dev/rdisk2 bs=1m
```

(Nutanix, Inc., 2020)
