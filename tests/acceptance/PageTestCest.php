<?php 

class PageTestCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    // tests
    public function testHome(AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->see('Welcome');
    }
}
