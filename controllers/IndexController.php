<?php


class Customdatacomponent_IndexController extends \Pimcore\Controller\Action\Admin
{
    public function indexAction()
    {

        // reachable via http://your.domain/plugin/Customdatacomponent/index/index
    }

    public function valuesAction()
    {

        $response = array(
            array(
                'id' => 0,
                'value' => 0,
                'text' => 'Value 0'
            ),
            array(
                'id' => 1,
                'value' => 1,
                'text' => 'Value 1'
            ),
            array(
                'id' => 2,
                'value' => 2,
                'text' => 'Value 2'
            )
        );

        return $this->_helper->json($response);
    }
}
