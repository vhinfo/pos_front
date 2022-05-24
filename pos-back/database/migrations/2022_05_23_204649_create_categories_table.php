<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('pos_products')->create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->string('website',200);
            $table->timestamps();
            //FK
            $table->foreignId('cest_ncm_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('pos_products')->dropIfExists('categories');
    }
};
