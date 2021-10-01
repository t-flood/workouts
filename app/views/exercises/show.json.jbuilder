 json.(@exercise, :id, :name, :sets, :reps, :weight, :created_at, :updated_at)

  json.workout do
    json.partial! 'workouts/workout', workout: @exercise.workout
  end
