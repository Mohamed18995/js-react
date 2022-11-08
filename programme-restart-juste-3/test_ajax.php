<?php
$questions = array();
$questions[0] = [
    "question" => "What is 2 + 2?",
    "answer" => array(
        ["text" => "4", "correct" => true],
        ["text" => "7", "correct" => false]
    ),
];
$questions[1] = [
    "question" => "Who is the best YouTuber?",
    "answer" => array(
        ["text" => "Web Dev Simplified", "correct" => true],
        ["text" => "Traversy Media", "correct" => false],
        ["text" => "Dev Ed", "correct" => false],
        ["text" => "Fun Fun Function", "correct" => false]
    ),
];
$questions[2] = [
    "question" => "Is web development fun?",
    "answer" => array(
        ["text" => "Kinda", "correct" => false],
        ["text" => "YES!!!", "correct" => true],
        ["text" => "Um no", "correct" => false],
        ["text" => "IDK", "correct" => false]
    ),
];
$questions[3] = [
    "question" => "What is 4 * 2?",
    "answer" => array(
        ["text" => "6", "correct" => false],
        ["text" => "8", "correct" => true],
    ),
];
echo json_encode($questions);