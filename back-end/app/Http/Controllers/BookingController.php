<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    public function addCourseUser(Request $request)
    {
        $user_id = Auth::user()->id;
        $request-> validate([
            'course_id'=> 'required|integer'
        ]);
        DB::table('course_user')->insert([
            'user_id'=> $user_id,
            'course_id' => $request-> course_id,
            'status'=> 'pending'
        ]);
        return response()->json([
            'message'=> 'aggiunto con successo'

        ], 200); 
    }

    public function deleteCourseUser($id) 
    {
        $user_id = Auth::user()->id;

        DB::table('course_user')
            ->where('user_id', $user_id)
            ->where('course_id', $id)
            ->delete();
    
        return response()->json([
            'message' => 'Corso rimosso con successo'
        ], 200);
    }

    public function coursesUser()
    {
        $user_id = Auth::user()->id;

        $courses = DB::table('course_user')
                       ->where('user_id', $user_id)
                       ->join('courses', 'course_user.course_id', '=', 'courses.id')
                       
                       
                       ->leftJoin('activities', 'courses.activity_id', '=', 'activities.id')
                       ->leftJoin('slots', 'courses.slot_id', '=', 'slots.id')
                       ->select(
                           'courses.*',
                           'course_user.status',
                           'activities.name as activity_name', 
                           'slots.day as slot_day'           
                       )
                       ->get();
                       return response()->json([
                        'courses' => $courses
                       ], 200);
    }
    

}
