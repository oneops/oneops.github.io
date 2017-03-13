---
layout: user-doc
title: User Component
---

The _user_ [component](./components.html) controls operating system user accounts and their creation on the
[compute component](./compute-component.html) of the same platform and is typically an optional component. Adding a
user for example allows you to connect to the [compute in operation](../operation/compute.html) via ssh.

# Attributes

_Username_<br>
_Description_<br>
_Home Directory_<br>
_Home Directory Mode_<br>
_Max Open Files_<br>
_Login shell_<br>
_System Account_<br>
_Enable Sudo Access_<br>
_Secondary Groups_<br>
_Authorized Keys_: Add one or multiple ssh keys that are authorized for a remote connection. You can get your
public key with e.g. `cat ~/.ssh/id_rsa.pub`.<br>
_Password (currently Windows only)_<br>
