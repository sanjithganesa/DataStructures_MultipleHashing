import React from "react";
import "/src/bootstrap.min.css";
import "/src/styles.css";

function Theory() {
  return (
    <div class="list-group">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Model Explaination.</h5>
      </div>
      <p class="mb-1">
        Introducing a model specifically designed for hashing and storage of
        numbers. The original data is securely preserved and can be easily
        accessed for future use. The stored hash acts as a compact
        representation of the number. When needed, the stored hash can be used
        as a reference to dehash and recover the original number, allowing
        seamless reutilization of the data.
      </p>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"> Modulo Hash. </h5>
      </div>
      <p class="mb-1">
        The modulo hash is a simple and widely used hashing technique that
        converts a given value into a hash code by taking the remainder of the
        value divided by a fixed modulus. This hashing approach provides a quick
        and efficient way to map a range of values to a limited set of hash
        codes. By applying the modulo operation, the hash function ensures that
        the resulting hash code falls within a specific range, typically defined
        by the modulus. This property helps in distributing the hash codes
        evenly, reducing the chances of collisions and ensuring a balanced
        distribution of data across hash buckets. The modulo hash is commonly
        employed in various applications, such as hash tables, data indexing,
        and caching mechanisms, where a fast and straightforward hashing
        algorithm is required. Its simplicity and effectiveness make it a
        popular choice for many scenarios where efficient data retrieval and
        storage are paramount.
      </p>
      <div class="list-group">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Polynomial following modulo hash.</h5>
        </div>
        <p class="mb-1">
          The polynomial with modulo hash is a more sophisticated hashing
          technique that utilizes polynomial functions to transform input values
          into hash codes. Unlike the simple modulo hash, this method involves
          multiplying the coefficients of a polynomial by the corresponding
          powers of the input value and summing them together. The resulting
          value is then reduced modulo a fixed modulus to obtain the hash code.
          The polynomial with modulo hash offers advantages over simpler hashing
          techniques as it generates more varied hash codes, leading to a
          reduced likelihood of collisions. This method is particularly
          effective when dealing with non-integer values or when a more even
          distribution of hash codes is desired. By leveraging the power of
          polynomials, this hashing approach provides a flexible and robust
          solution for a wide range of applications, including data structures
          like hash tables, cryptography, and data integrity verification. Its
          ability to generate unique hash codes enhances the efficiency and
          reliability of various systems that rely on efficient data retrieval
          and secure storage.
        </p>
      </div>
      <div class="list-group">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Math function following modulo hash.</h5>
        </div>
        <p class="mb-1">
          A math function with modulo hash refers to the utilization of
          mathematical functions in combination with the modulo operation to
          generate hash codes. This approach involves applying a specific
          mathematical function, such as a linear or non-linear function, to an
          input value, and then taking the modulus of the result using a fixed
          modulus value. The resulting value serves as the hash code. By
          incorporating mathematical functions into the hashing process, this
          technique enhances the uniqueness and distribution of the hash codes,
          reducing the chances of collisions and improving overall data
          integrity. Moreover, the use of math functions allows for
          customization and fine-tuning of the hashing process to suit specific
          requirements. This method finds applications in various domains,
          including cryptography, data indexing, and error detection, where
          efficient and secure data storage and retrieval are essential. The
          math function with modulo hash provides a powerful tool for generating
          robust and reliable hash codes that ensure data consistency and
          facilitate efficient data handling operations.
        </p>
      </div>
    </div>
  );
}

export default Theory;
