<?php

class Student {

    public $stu_number;
    public $course;
    public $test1;
    public $test2;
    public $tut_test1;
    public $tut_test2;

    function set_stu_number($stu_number) {
        $this->stu_number = $stu_number;
    }

    function set_course($course) {
        $this->course = $course;
    }

    function set_test1($test1) {
        $this->test1 = $test1;
    }

    function set_test2($test2) {
        $this->test2 = $test2;
    }

    function set_tut_test1($tut_test1) {
        $this->tut_test1 = $tut_test1;
    }

    function set_tut_test2($tut_test2) {
        $this->tut_test2 = $tut_test2;

    }

    function getMarks($stu_number){
        
    }

    function enterMarks($stu_number, $test_num){
        
    }
}

?>