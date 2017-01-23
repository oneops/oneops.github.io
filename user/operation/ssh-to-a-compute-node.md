---
layout: user-doc
title: SSH to a Compute Node
id: ssh-to-a-compute-node
---

# Solution

1. Go to your **Assembly** and select the **Edit the User** component (for example, `user_app`) to add your public keys to the Authorized Keys attribute.
2. If your platform doesn’t have a user component, add one from the component panel on the right side by clicking the **+** next to the user.
3. Get the public key of the user (`cat ~/.ssh/id_rsa.pub`) who needs to have SSH access to your compute (VM).
4. Add one key at a time and click **+** to add more users.
5. Save the design changes and click **Commit.** 
6. Go to **Transition.** 
7. In the environment where the VM is, click **Pull the design.** 
6. Deploy the changes. (Only the user-app step is executed again.)
7. At a successful deploy, you can SSH to the VM by entering:

```
$ ssh <user-name-you-chose>@<ip-of-vm>
```


