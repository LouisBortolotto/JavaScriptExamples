<?php
switch (strtoupper($_REQUEST['state'])) {
    case 'QLD':
        echo "Queensland";
        break;
    case "NSW":
        echo "New South Wales";
        break;
    case "VIC":
        echo "Victoria";
        break;
    case "WA":
        echo "Western Australia";
        break;
    case "TAS":
        echo "Tasmania";
        break;
    case "NT":
        echo "Northern Territory";
        break;
    case "SA":
        echo "South Australia";
        break;
    case "ACT":
        echo "Canberra";
        break;
    case "NQ":
        echo "North Queensland";
        break;
    case "NZ":
        echo "New Zealand";
        break;
    default:
        echo "unknown";
        break;
}