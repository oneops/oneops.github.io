---
layout: user-doc
title: ssh a VM
id: ssh-vm
---

# Solution

1. Go to your design.
2. Modify the component user-app to add to the "Authorized Keys" attribute. 
  
    The value will be the public keys of the users (cat ~/.ssh/id_rsa.pub) who need to have ssh access to your VM. 
  
3. Add one key at a time and click plus sign to add for more users.
4. Save the design changes and commit.
5. Go to Transition.
6. Click **pull the design** in the environment where the VM is.
7. Deploy. (Only the user-app step is executed again.)
8. At a successful deploy, you can log into the VM by doing ssh app@<ip-of-vm>.
  

