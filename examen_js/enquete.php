<?php

// Questions
$questions = array(
    '1' => array(
        'type' => 'boolean',
        'title' => 'Préparation',
        'questions' => array(
            '1.1' => 'Avez-vous bien révisé ?',
            '1.2' => 'Etes-vous prêt pour cet examen ?'
        )
    ),
    '2' => array(
        'type' => 'scale',
        'title' => 'Matière',
        'questions' => array(
            '2.1' => 'Comment appréciez-vous votre maîtrise de JavaScript ?',
            '2.2' => 'Comment jugez-vous le contenu de ce cours ?',
            '2.3' => 'Que pensez-vous de la proportion théorie/labo ?',
            '2.4' => 'Comment jugez-vous votre choix de suivre ce cursus ?',
            '2.5' => 'Quel est votre avis sur le volume horaire de ce cours ?'
        )
    ),
    '3' => array(
        'type' => 'text',
        'title' => 'Pistes de progrès',
        'questions' => array(
            '3.1' => 'Quels sont les cours que vous voudriez ajouter à ce cursus ?',
            '3.2' => 'Quelles sont vos propositions d\'amélioration de ce cursus ?'
        )
    ),
    '4' => array(
        'type' => 'boolean',
        'title' => 'Prédictions',
        'questions' => array(
            '4.1' => 'Réussirez-vous ce cours en première session ?',
            '4.2' => 'Réussirez-vous ce cours en deuxième session ?'
        )
    ),
);
$return = array();
if (isset($_GET['length'])) {

    $return = array('length' => count($questions));
    
    } elseif (isset($_GET['page'])) {
    
    if (array_key_exists($_GET['page'], $questions)) {
    
    $return = $questions[$_GET['page']];
    
    }
    
    }

echo json_encode($return);
