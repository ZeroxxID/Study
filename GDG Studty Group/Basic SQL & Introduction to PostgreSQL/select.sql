SELECT * FROM orders;

SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';

SELECT * FROM orders WHERE price > 250000;

SELECT * FROM orders WHERE course ILIKE '%SQL%';

SELECT course, price FROM orders ORDER BY price ASC LIMIT 3;

SELECT DISTINCT city FROM customers;

SELECT 
    c.name, 
    c.city, 
    o.course, 
    o.price, 
    o.order_date 
FROM orders AS o 
JOIN customers AS c ON o.customer_id = c.id;

SELECT 
    c.city, 
    SUM(o.price) AS total_spend 
FROM orders AS o 
JOIN customers AS c ON o.customer_id = c.id 
GROUP BY c.city 
HAVING SUM(o.price) > 1000000;

SELECT 
    c.name, 
    c.city, 
    o.course AS book_title, 
    o.price, 
    o.order_date
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
WHERE c.city IN ('Bandung', 'Jakarta') 
  AND o.price >= 180000
ORDER BY o.price DESC;

SELECT 
    c.city, 
    SUM(o.price) AS total_spent
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
GROUP BY c.city
HAVING SUM(o.price) > 3000000;

SELECT 
    c.name, 
    c.city, 
    o.course AS book_title, 
    o.price, 
    o.order_date
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
WHERE o.order_date BETWEEN '2024-02-01' AND '2024-03-31'
  AND (o.course ILIKE '%SQL%' OR o.course ILIKE '%PostgreSQL%')
ORDER BY o.order_date DESC;

SELECT 
    c.name, 
    c.city, 
    COUNT(o.id) AS total_books, 
    SUM(o.price) AS total_spent, 
    AVG(o.price) AS avg_price
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
GROUP BY c.name, c.city
HAVING COUNT(o.id) >= 4
ORDER BY total_spent DESC;
