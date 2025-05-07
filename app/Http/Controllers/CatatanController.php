<?php

namespace App\Http\Controllers;

use App\Models\Catatan;
use Illuminate\Http\Request;

class CatatanController extends Controller
{
    public function post(Request $request)
    {
        $validated = $request->validate([
            'catatan' => 'required|string|max:27',
        ]);

        $Catatan = new Catatan();
        $Catatan->user_id = $request->user()->id;
        $Catatan->catatan = $validated['catatan'];
        $Catatan->save();

        return redirect()->back()->with('success', 'Catatan berhasil ditambahkan');
        // dd($request->catatan);
    }
}
