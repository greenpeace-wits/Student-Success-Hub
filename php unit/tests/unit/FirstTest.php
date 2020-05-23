<?php

use PHPUnit\Framework\TestCase;

class FirstTest extends TestCase{
    /** @test */
    public function MultiplicationOfTwoNumbers(){
        $a = 5;
        $b = 4;
        $c = 5 * 4;
        
        $this->assertEquals($c, 20);
    }
}