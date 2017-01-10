<?php
namespace Pimcore\Model\Object\ClassDefinition\Data;

use Pimcore\Model;

class Customdatacomponent extends Model\Object\ClassDefinition\Data\Select
{

    /**
     * Static type of this element
     *
     * @var string
     */
    public $fieldtype = "customdatacomponent";


    public $customoption;

    /** Restrict selection to comma-separated list of countries.
     * @var null
     */
    public $restrictTo = null;


    public function __construct()
    {
    }

    public function setcustomoption($customoption)
    {
        $this->customoption = $customoption;
    }

    public function getcustomoption()
    {
        return $this->customoption;
    }
}
