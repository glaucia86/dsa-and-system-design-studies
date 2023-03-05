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
- [Video: System Design Basics: Horizontal vs. Vertical Scaling](https://youtu.be/xpDnVSmNFX0)

## Denormalization vs normalization

Denormalization and normalization are two common techniques used in database design to optimize database performance and ensure data integrity.

### Normalization

Normalization is the process of organizing data in a database so that it is free from redundancy and dependencies. The goal of normalization is to reduce data duplication and ensure that each piece of data is stored in only one place. This is achieved by breaking down large tables into smaller ones, with each table containing only related data. Normalization is based on a set of rules called Normal Forms (NF), and there are several levels of normalization, from first normal form (1NF) to fifth normal form (5NF).

### Denormalization

Denormalization, on the other hand, is the process of intentionally introducing redundancy into a database. The goal of denormalization is to improve database performance by reducing the number of joins needed to retrieve data. By duplicating data across multiple tables, queries can be optimized to retrieve data more quickly. However, denormalization can also introduce data integrity issues, as updates to one copy of the data must be propagated to all other copies.

Here are the key differences between normalization and denormalization:

**Data Redundancy:** Normalization reduces data redundancy by breaking down tables into smaller ones. Denormalization, on the other hand, introduces redundancy to improve query performance.

**Data Integrity:** Normalization ensures data integrity by reducing data dependencies and ensuring that each piece of data is stored in only one place. Denormalization can introduce data integrity issues, as updates to one copy of the data must be propagated to all other copies.

**Query Performance:** Normalization can negatively impact query performance by requiring more joins to retrieve data. Denormalization can improve query performance by reducing the number of joins needed to retrieve data.

**Maintenance:** Normalization can make database maintenance easier, as updates only need to be made to one copy of the data. Denormalization can make maintenance more complex, as updates need to be propagated to all copies of the data.

Overall, the choice between normalization and denormalization depends on the specific needs of the application and the performance requirements of the database. In general, normalization is recommended for databases where data integrity is critical, while denormalization is recommended for databases where query performance is critica.

### Sharding Databases

Sharding is a database design technique that is used to horizontally partition large databases into smaller, more manageable parts called shards. The goal of sharding is to improve database performance and scalability by distributing the workload across multiple servers.

Here are the key elements of a sharded database system design:

**Data partitioning:** In sharding, the data in the database is partitioned into smaller pieces called shards, with each shard containing a subset of the data. The data is typically partitioned based on a shard key, which is a field or set of fields that are used to determine which shard a particular piece of data belongs to.

**Shard servers:** Each shard is stored on a separate server, which is responsible for managing the data in that shard. Each server is typically a replica set, with multiple copies of the shard data stored across different servers for redundancy and high availability.

**Query routing:** When a client sends a query to the database, the query needs to be routed to the appropriate shard server based on the shard key. This is typically done by a query router, which looks at the shard key and determines which shard server to send the query to.

**Global state management:** In a sharded database, there may be some shared resources that need to be managed globally, such as indexes, locks, and counters. To ensure consistency, these resources need to be managed across all the shard servers.

**Backup and recovery:** Since each shard is stored on a separate server, backups and recovery operations need to be performed on each shard independently. Additionally, if a server fails, the data in that shard needs to be recovered from backups or replicated data on other servers.

### Resources

- [Normalization vs Denormalization](https://medium.com/analytics-vidhya/database-normalization-vs-denormalization-a42d211dd891)
- [Video: Sharding Databases](https://youtu.be/5faMjKuB9bc)
- [Sharding Databases](https://www.geeksforgeeks.org/database-sharding-a-system-design-concept/)
- [Sharding Databases](https://igotanoffer.com/blogs/tech/sharding-system-design-interview)