<?php
$pathComposed = __DIR__ . '/../music/composeds/*';
$pathArranged = __DIR__ . '/../music/arrangeds/*';
$contentsComposeds = glob($pathComposed);
$contentsArranges = glob($pathArranged);

$arranged = array_map(function($input){
    $basename = basename($input);
    $temp = ["address" => '/music/arrangeds/' . $basename, "name"=> $basename];
    return $temp;
},$contentsArranges);

$composeds = array_map(function($input){
    $basename = basename($input);
    $temp = ["address" => '/music/composeds/' . $basename, "name"=> $basename];
    return $temp;
}, $contentsComposeds);
echo json_encode(array("composed"=>$composeds, "arranged"=>$arranged));