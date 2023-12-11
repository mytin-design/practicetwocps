<!DOCTYPE html>
<html>
<head>
    <title>CPS Blog - Blog Posts</title>
    <link rel="stylesheet" type="text/css" href="./cpsblog.css">
</head>
<body>
    <header>
        <h1>CPS Blog</h1>
    </header>
    <nav>
        <ul>
            <li><a href="./cpsblog.html">Home</a></li>
            <li><a href="./cpsblog.php">Blog</a></li>
        </ul>
    </nav>
    <main>
        <h2>Blog Posts</h2>
        <?php
        // Simulated blog posts
        $posts = array(
            array(
                'title' => 'Post 1',
                'content' => 'This is the content of Post 1.',
            ),
            array(
                'title' => 'Post 2',
                'content' => 'This is the content of Post 2.',
            ),
        );

        // Display blog posts
        foreach ($posts as $post) {
            echo '<article>';
            echo '<h3>' . $post['title'] . '</h3>';
            echo '<p>' . $post['content'] . '</p>';
            echo '</article>';
        }
        ?>
    </main>
    <footer>
        &copy; 2023 CPS Blog
    </footer>
</body>
</html>
