-- Enumerated type for user roles
DROP TYPE IF EXISTS role;
CREATE TYPE role AS ENUM (
    'admin',
    'content manager',
    'editor',
    'writer'
);