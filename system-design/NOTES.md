# System Design Studies

## Vertical Scaling vs Horizontal Scaling

### Vertical Scaling

Vertical scaling, also known as scaling up, involves adding more resources to a single machine, such as increasing the amount of RAM, CPU cores, or storage. This is typically done by upgrading hardware components or increasing the capacity of a cloud instance. Vertical scaling is generally easier to implement, as it involves only one machine, but it has limitations on how much a single machine can scale. It is suitable for applications that require more CPU or memory resources.

### Horizontal Scaling

Horizontal scaling, also known as scaling out, involves adding more machines to a system, rather than adding more resources to a single machine. This is done by adding more servers or cloud instances to a system and distributing the workload across them. Horizontal scaling is generally more complex to implement as it requires a distributed architecture, load balancing, and data replication, but it offers virtually unlimited scalability. It is suitable for applications that require more processing power or storage capacity.

### Summary

Vertical scaling involves adding more resources to a single machine, while horizontal scaling involves adding more machines to a system.

> better approach (if the application has a lot of transactions and requests) is to use horizontal scaling, which involves adding more machines to a system, rather than adding more resources to a single machine.

### Resources

- [Vertical Scaling vs Horizontal Scaling](https://www.geeksforgeeks.org/system-design-horizontal-and-vertical-scaling/)