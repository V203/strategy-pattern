[![Node.js CI](https://github.com/V203/strategy-pattern/actions/workflows/node.js.yml/badge.svg)](https://github.com/V203/strategy-pattern/actions/workflows/node.js.yml)


# Strategy Pattern


### What is the strategy pattern

The strategy pattern is a behavioral software design pattern used in computer programming that allows choosing an algorithm during runtime.

The algorithm can change without being affected by the users of it thanks to strategy. [2] The important book Design Patterns by Gamma et al.[3] popularized the idea of utilizing develop patterns to describe how to design flexible and reusable object-oriented software, and one of the patterns it includes is strategy. The calling code can be more adaptable and reusable if the choice of algorithm is left up to runtime.

For instance, a class that validates incoming data may utilize the strategy pattern to choose a validation technique based on the type of data, where the data came from, the user's preference, or other identifying characteristics. These variables are unknown until runtime and may necessitate entirely distinct validation procedures. Other validating objects in different parts of the system (or even distinct systems) may use the validation algorithms (strategies), which are individually packaged from the validating object, without duplicating any code.


### Advantages
    * You employ polymorphism in the interfaces, making it simple to switch between various algorithms (strategies) in runtime.
    * More clean code because you separate the concerns into classes (a class to each strategy).
    * Clean code because you avoid conditional-infested code (not complex).