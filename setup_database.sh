# Create the database "projectstyx"
psql -d postgres -U postgres -h localhost -c "DROP DATABASE IF EXISTS pms"
psql -d postgres -U postgres -h localhost -c "CREATE DATABASE pms"

# Install the pgcrypto extension
psql -d eidr -U postgres -h localhost -c "DROP EXTENSION IF EXISTS pgcrypto"
psql -d eidr -U postgres -h localhost -c "CREATE EXTENSION pgcrypto"

# Import the sql files
psql -d eidr -U postgres -h localhost -f database/schema.sql
psql -d eidr -U postgres -h localhost -f database/session.sql