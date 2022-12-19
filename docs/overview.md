# Software design concepts used in projects

Dependency injection technique where used in the project to,
enable substituting fake dependecies in components and functions (allowing loose coupling).

### Design Tips

The session Storage could be redesign better to enable another source of data, using the following IOC concepts;

- Statergy pattern, the Storage object could be wrapped and abstract using an interface (dependency inversion).
- Factory pattern, this could allow encapsulated creation of possible storage mechanisms.

### Performance test with lighthouse

used lighthouse to check the client performance of the application.

[lighthouse-report](../lighthouse-report.jpg)
