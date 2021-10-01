json.array! @workouts do |workout|
  json.id workout.id
  json.name workout.name
  json.date_completed workout.date_completed
  json.created_at workout.created_at
  json.updated_at workout.updated_at
end
