# json.extract! exercise, :id, :name, :sets, :reps, :weight, :created_at, :updated_at
# json.url exercise_url(exercise, format: :json)

json.id exercise.id
json.name exercise.name
json.sets exercise.sets
json.reps exercise.reps
json.weight exercise.weight
json.created_at exercise.created_at
json.updated_at exercise.updated_at
