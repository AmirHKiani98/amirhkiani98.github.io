<?php
$projectsHTML ='<?xml encoding="utf-8">' . file_get_contents("https://github.com/AmirHKiani98?tab=repositories");
$doc = new DOMDocument();
libxml_use_internal_errors(true);
$doc->loadHTML($projectsHTML);
libxml_use_internal_errors(false);

$domXPath = new DOMXPath($doc);

$query = $domXPath->query("//div[contains(@class, 'col-10 col-lg-9 d-inline-block')]");
$results = [];
foreach ($query as $divKey => $divValue) {
    $a = $divValue->getElementsByTagName("a");
    $projectName = trim($a->item(0)->textContent);
    // $starsNumber = trim($a->item(1)->textContent);
    $p = $divValue->getElementsByTagName("p");
    if($p->length == 0){
        $caption = "";
    }else{
        $caption = trim($p->item(0)->textContent);
    }
    
    $spans = $divValue->getElementsByTagName("span");
    foreach ($spans as $spanKey => $spanValue) {
        foreach ($spanValue->attributes as $attrKey => $attrValue) {
            if($attrValue->name == "style"){
                $color = trim($attrValue->textContent);
            }
            if($attrValue->name == "itemprop"){
                $mainProgrammingLnag = trim($spanValue->textContent);
            } 
        }
    }
    $relativeTime = trim($divValue->getElementsByTagName("relative-time")->item(0)->textContent);

    $temp = ["relative_time"=> $relativeTime, "color" => $color, "programming_language" => $mainProgrammingLnag, "caption" => $caption, "projectName" => $projectName];
    array_push($results, $temp);
}
echo json_encode($results);