<?php

use PHPUnit\Framework\TestCase;

class FirstTest extends TestCase{
    /** @test */
    public function testFetchByStdNum()
    {
        $stu = new Student();
        $stu->set_stu_number(4444);
        $stu->set_course("COMS2015");
        $stu->set_test1(80);
        $stu->set_test2(70);
        $stu->set_tut_test1(75);
        $stu->set_tut_test2(90);

        $this -> assertEquals([80,70,75,90], $stu->getMarks(4444));
    }

    public function testInsertMarks()
    {
        $stu = new Student();
        $stu->set_stu_number(0000);
        $stu->set_course("COMS2015");
        $stu->set_test1(100);
        $stu->set_test2(50);
        $stu->set_tut_test2(60);

        $this -> assertEquals([100,50,70,60], $stu->enterMarks(0000, "tut_test1", 70));
    }
}