<?php

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
});
