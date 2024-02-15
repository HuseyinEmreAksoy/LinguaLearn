-- Drop user first if they exist
DROP USER if exists 'linguaLearn'@'%' ;

-- Now create user with prop privileges
CREATE USER 'linguaLearn'@'%' IDENTIFIED BY 'linguaLearn';

GRANT ALL PRIVILEGES ON * . * TO 'linguaLearn'@'%';