USE `lingualearn_tracker`;

INSERT INTO user (user_id, user_name, user_Email, user_password, user_main_language, user_level) VALUES
(11, 'Kullanıcı 1', 'kullanici1@example.com', 'sifre123', 'English', 'A1'),
(12, 'Kullanıcı 2', 'kullanici2@example.com', 'sifre123', 'French', 'B2'),
(13, 'Kullanıcı 3', 'kullanici3@example.com', 'sifre123', 'German', 'C2');

INSERT INTO performance (id, user_id, activity_type, correct_answers, wrong_answers, date) VALUES
(101, 11, 'listening', 20, 5, '2024-03-22'),
(102, 11, 'reading', 18, 7, '2024-03-21'),
(103, 11, 'vocabulary', 22, 3, '2024-03-20'),
(104, 12, 'listening', 15, 10, '2024-03-19'),
(105, 12, 'reading', 20, 5, '2024-03-18'),
(106, 13, 'listening', 25, 0, '2024-03-17'),
(107, 13, 'reading', 23, 2, '2024-03-16'),
(108, 13, 'vocabulary', 21, 4, '2024-03-15');
