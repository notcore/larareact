<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catatan extends Model
{
    /** @use HasFactory<\Database\Factories\CatatanFactory> */
    use HasFactory;
    protected $with = ['user'];

    protected $fillable = [
        'id',
        'user_id',
        'catatan',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
