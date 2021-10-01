json.array! @exercises do |exercise|
  json.id exercise.id
  json.name exercise.name
  json.sets exercise.sets
  json.reps exercise.reps
  json.weight exercise.weight
  json.created_at exercise.created_at
  json.updated_at exercise.updated_at

  json.workout do
    json.partial! 'workouts/workout', workout: exercise.workout
  end
end
