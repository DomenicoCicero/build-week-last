<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// http://localhost:8000/api/courses
Route::get("/courses", [CourseController::class, 'index']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get("/courses/{course}", [CourseController::class, 'show']);
    Route::get("/courses_for_user", [CourseController::class, 'coursesForUser']);
    Route::post("/add_course_user", [BookingController::class, 'addCourseUser']);
    Route::delete("/delete_course_user/{course_id}", [BookingController::class, 'deleteCourseUser']);
});
