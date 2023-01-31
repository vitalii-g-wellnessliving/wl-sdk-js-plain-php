<?php

namespace Src;

class Csrf
{
    public function get(): string
    {
        return hash('sha3-512', '75435722612780252161' . session_id());
    }

}
