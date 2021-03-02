-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2021 at 11:17 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `whoomandb`
--

-- --------------------------------------------------------

--
-- Table structure for table `datalist`
--

CREATE TABLE `datalist` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `gender` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `datalist`
--

INSERT INTO `datalist` (`id`, `name`, `surname`, `date`, `gender`, `created_at`) VALUES
(1, 'Jane', 'Doe', '2020-10-14', 'Male', '2021-02-28 23:51:06'),
(2, 'Lordasd', 'StarLord', '2020-01-13', 'Male', '2021-03-02 22:16:34'),
(4, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(6, 'Thor', 'The Asgardian', '2017-07-11', 'Female', '2021-03-03 00:00:10'),
(7, 'Wolverine', 'Logan', '2020-01-16', 'Male', '2021-02-28 17:41:18'),
(8, 'Jane', 'Doe', '2019-01-15', 'Female', '2021-02-28 23:52:26'),
(9, 'Peter', 'Parker', '2018-05-21', 'Male', '2021-02-28 17:42:17'),
(10, 'Capitain', 'America', '2018-08-22', 'Male', '2021-02-28 17:42:17'),
(11, 'Bruce', 'Wayne', '2017-04-12', 'Male', '2021-03-02 23:58:15'),
(12, 'Diana', 'Wonderwoman', '2010-11-07', 'Female', '2021-03-02 23:58:15'),
(13, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(14, 'Wolverine', 'Logan', '2020-01-16', 'Male', '2021-02-28 17:41:18'),
(15, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(16, 'Lordasd', 'StarLord', '2020-01-13', 'Male', '2021-03-02 22:16:34'),
(17, 'Jane', 'Doe', '2019-01-15', 'Female', '2021-02-28 23:52:26'),
(18, 'Lordasd', 'StarLord', '2020-01-13', 'Male', '2021-03-02 22:16:34'),
(19, 'Jane', 'Doe', '2020-10-14', 'Male', '2021-02-28 23:51:06'),
(20, 'Capitain', 'America', '2018-08-22', 'Male', '2021-02-28 17:42:17'),
(21, 'Jane', 'Doe', '2019-01-15', 'Female', '2021-02-28 23:52:26'),
(22, 'Hulk', 'Smash', '2000-03-03', 'Male', '2021-03-02 23:59:28'),
(23, 'Wolverine', 'Logan', '2020-01-16', 'Male', '2021-02-28 17:41:18'),
(24, 'Jane', 'Doe', '2019-01-15', 'Female', '2021-02-28 23:52:26'),
(25, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(26, 'Thor', 'The Asgardian', '2017-07-11', 'Female', '2021-03-03 00:00:18'),
(27, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(28, 'Capitain', 'America', '2018-08-22', 'Male', '2021-02-28 17:42:17'),
(29, 'Diana', 'Wonderwoman', '2010-11-07', 'Female', '2021-03-02 23:58:15'),
(30, 'Lordasd', 'StarLord', '2020-01-13', 'Male', '2021-03-02 22:16:34'),
(31, 'Iron', 'Man', '2018-01-01', 'Male', '2021-03-02 22:31:09'),
(32, 'Peter', 'Parker', '2018-05-21', 'Male', '2021-02-28 17:42:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datalist`
--
ALTER TABLE `datalist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datalist`
--
ALTER TABLE `datalist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
