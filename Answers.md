Q1 - Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.<br />

Ans - The relationship between the "Product" and "Product_Category" entities can be understood as follows:<br />
• Each product in the "Product" table is associated with a category from the "Product_Category" table.<br />
• The line drawn between the category_id column in the "Product" table and the id column in the "Product_Category" table indicates a connection between them.<br />
• The star drawn next to the category_id column in the "Product" table signifies that it's a foreign key referencing the id column in the "Product_Category" table.<br />
• The number "1" written next to the id column in the "Product_Category" table suggests that each record in the "Product_Category" table can be associated with multiple records in the "Product" table.<br />
Therefore, this representation suggests a many-to-one relationship between the "Product" and "Product_Category" entities, where multiple products can belong to one product category.<br /><br />

/////////////////////////////////////////////////////////////////////<br /><br />
Q2 - How could you ensure that each product in the "Product" table has a valid category assigned to it?<br />

Ans - To ensure that each product in the "Product" table has a valid category assigned to it, we will use the following approach:<br />
• **Validation Rule:** In the productSchema definition, we have added a validation rule for the category field using the validate property.<br />
• **Validation Function:** The validation rule specifies a custom validation function that asynchronously queries the "ProductCategory" collection to count the documents matching the specified category ID.<br />
• **Validation Logic:** If the count of matching documents is greater than 0, it indicates that the category is valid. If the count is 0, it means that there is no category with the specified ID, and the validation fails.<br />
• **Error Message:** In case of validation failure, an error message is returned stating 'Invalid category assigned to product.'.<br />
• **Integration with Mongoose:** This validation logic is integrated into Mongoose's schema definition. Whenever you try to save a new product or update an existing one in the "Product" collection, Mongoose automatically triggers this validation process before executing the save operation.<br />
In summary, by implementing this validation logic in the schema definition, we ensure that each product in the "Product" table has a valid category assigned to it before it is saved to the database. This helps maintain data integrity and prevents inconsistencies in the database.<br />




