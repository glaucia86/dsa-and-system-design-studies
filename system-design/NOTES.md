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

### ACID Compliance

ACID compliance is a set of properties that guarantee that database transactions are processed reliably. The acronym ACID stands for Atomicity, Consistency, Isolation, and Durability.

**Atomicity:** Either the entire transaction succeds, or the entire thing fails.

**Consistency:** All database rules are ennforced, or the entire transaction is rolled back.

**Isolation:** No transaction is affected by any other transaction that is still in progress.

**Durability:** Once a transaction is committed, it stays, even of the system crashes immediately after.

### Resources

- [ACID Compliance](https://blog.betrybe.com/tecnologia/acid-porque-usar/)


### Cap Theorem

The CAP theorem is a theory that states that in a distributed database system, it is impossible to simultaneously guarantee all three of the following properties:

**Consistency:** Every read from the database receives the most recent write or an error.

**Availability:** Every request for data receives a response, without guarantee that it contains the most recent version of the information.

**Partition tolerance:** The system continues to function even when network partitions occur, which means that messages sent between nodes may be lost or delayed.

The CAP theorem asserts that a distributed database system can guarantee at most two of these properties at the same time. Therefore, a system that prioritizes consistency and availability may not be partition-tolerant, while a system that prioritizes availability and partition-tolerance may not guarantee consistency of the data.

The CAP theorem is important for designing distributed database systems and allows developers to choose between consistency and availability, depending on the needs of the system. For example, a system that manages financial transactions should prioritize consistency, while a real-time sensor monitoring system should prioritize availability and partition-tolerance.

### Resources

- [CAP Theorem](https://www.educative.io/blog/what-is-cap-theorem)

### Caching

Caching is a technique used to improve the performance of a system by storing frequently accessed data in a cache, which is a temporary data storage area. The goal of caching is to reduce the number of requests to the database, which can improve the response time of the system.

How caches work:

* Horizontally scaled servers
* Clients hash requests to a given server 
* In-memory (fast)
* Appropriate for applications with more reads than writes
* The _expiration policy_ dictates how long data is cached. Too long and your data may go stale. Too short and the cache won't do much good. 
* _Hotspots_ can be a problem (the "celebrity problem")
* Cold-start is also a problem. How do you initially warm up the cache without bringing down whatever you are caching?

### Caching Eviction Policies

**FIFO:** This policy evicts the oldest items from the cache when the cache is full. This policy is simple to implement and is useful when the data being cached is not frequently accessed..

**LRU:** This policy evicts the least recently used items from the cache when the cache is full. This is a popular eviction policy as it tends to work well in most use cases.

**LFU:** This policy evicts the least frequently used items from the cache when the cache is full. This policy is useful when the application has a high rate of data access and some data is accessed more frequently than others.

**Random:** This policy evicts items from the cache randomly when the cache is full. This policy is easy to implement and can be effective in some situations.

### Resources

- [Cache Eviction Policies](https://www.codecademy.com/article/cache-eviction-policies)

### Content Delivery Networks

A Content Delivery Network (CDN) is a distributed network of servers that work together to provide faster and more reliable content delivery to users. A CDN system design involves a range of components, including edge servers, origin servers, caching systems, load balancers, and content distribution algorithms.

Here's a high-level overview of a typical CDN system design:

Edge servers: Edge servers are the servers closest to the end-users geographically. They are responsible for caching and serving content to users.

Origin servers: Origin servers are the servers where the original content is stored. Edge servers fetch content from origin servers as needed.

Caching system: The caching system stores frequently accessed content in the edge servers to reduce the load on the origin servers and improve content delivery times.

Load balancers: Load balancers distribute incoming requests across the edge servers to ensure that the load is evenly distributed and that the system can handle high traffic loads.

Content distribution algorithms: Content distribution algorithms determine which edge server should serve the content to the user based on factors such as network latency, server load, and geographic location.

Monitoring and analytics: A CDN system must have monitoring and analytics in place to track system performance, identify issues, and optimize the system over time.

When designing a CDN system, it's important to consider factors such as the geographic distribution of users, the type of content being delivered, and the expected traffic load. CDNs can be deployed using a range of architectures, including fully distributed, hybrid, and virtualized architectures.

Overall, a well-designed CDN system can significantly improve the performance and reliability of content delivery, enabling organizations to provide a better user experience and meet the needs of their users more effectively.

### Resiliency

Resiliency system design involves designing a system that is able to maintain its functionality in the face of disruptions, failures, or other unexpected events. The goal of a resilient system is to minimize downtime, reduce the impact of disruptions, and ensure that the system can quickly recover from failures.

However is necessary to be smart about distributing your servers. Some points to talk here:

* Secondaries should be spread across multiple racks, availability zones, and regions

* Make sure your system has enough capacity to survive a failure at any reasonable scale.

* You may need to balance budget vs availability. Not every system warrants this.
    - Provisioning a new server from an offsite backup might be good enough.


### Distributed Storage

Distributed storage solutions are a popular choice for system design because they offer several advantages over traditional centralized storage solutions. Distributed storage solutions are designed to store data across multiple servers, which can improve reliability, availability, and scalability.

Here are some common distributed storage solutions for system design:

Distributed file systems: Distributed file systems allow multiple servers to share the same file system, which can improve scalability and availability. Popular distributed file systems include Hadoop Distributed File System (HDFS), GlusterFS, and Ceph.

Object storage systems: Object storage systems are designed to store large amounts of unstructured data, such as images, videos, and audio files. Object storage systems use a flat address space to store objects, which can improve scalability and performance. Popular object storage systems include Amazon S3, Google Cloud Storage, and OpenStack Swift.

Key-value stores: Key-value stores are designed to store large amounts of structured data, such as user profiles, session data, and application settings. Key-value stores use a simple key-value interface to store and retrieve data, which can improve performance and scalability. Popular key-value stores include Redis, Apache Cassandra, and Riak.

Distributed databases: Distributed databases allow multiple servers to share the same database, which can improve scalability and availability. Distributed databases can be categorized into two types: sharded databases, which partition the data across multiple servers, and replicated databases, which store multiple copies of the same data on multiple servers. Popular distributed databases include Apache Cassandra, Apache HBase, and CockroachDB.

When designing a system that uses distributed storage solutions, it's important to consider factors such as data consistency, replication, and partitioning, as well as the overall system architecture and the specific requirements of the application. With careful planning and design, distributed storage solutions can provide a highly scalable and reliable foundation for modern systems.

### Some questions:

1. Vertical scaling means: 

A: Vertical scaling means using one server and just making that server more and more powerful as your traffic grows. This can result in a single point of failure and has an upper bound of how far you can scale. But for small, non-critical systems it may be a simple and cost-effective choice.

2. Horizontal Scaling requires:

A: In a horizontally scalable system, every server should be "stateless" and assume that any request could have been handled by itself or by any other server.

3. A database host that is replicated to a backup that's always ready to take over is an example of:

A: Warm standby. When dealing with monolithic relational database hosts, replication is a common backup technique. However scalable systems generally rely on distributed key/value data stores, or more generally object stores, AKA "NoSQL" - as these can be horizontally scaled with backups on each shard.

4. Which NoSQL database has no master node?
A: Cassandra

5. A downside of denormalized data is...
A: Updates in a denormalized table can involve iterating through every row, looking for copies of data that must be updated. They also take up more space.

6. Distributed "NoSQL" databases with a master node that distributes transactions fall on which side of the CAP triangle?
A: Single-master designs favor consistency and partition tolerance. Although in principle availability it what's given up, in practice modern NoSQL databases have highly redundant master nodes that can quickly replace themselves in the event of failure.

7. When designing a cache that discards the data accessed the longest time ago, which eviction policy is appropriate?
A: LRU

8. If you need to minimize client latency for retrieving static data around the world at any cost, you would use:
A: A CDN. Content Delivery Networks (CDN's) are aimed at the problem of global traffic and minimizing latency due to long network hops. Load balancers and caching technologies such as Redis can also be parts of low-latency designs, but are not specifically for the problem of global traffic.

9. In HDFS, the server responsible for coordinating requests is called the:
A: NameNode. In the Hadoop Distributed File System, the name node coordinates how files are broken into blocks, and where those blocks are stored. In high availability settings, multiple name nodes may be present for failover.







