<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class impuesto_valor_agregado extends Model
{
	use SoftDeletes;
	protected $table = "impuesto_valor_agregado";

}
