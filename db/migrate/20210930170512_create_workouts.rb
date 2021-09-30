class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.datetime :date_completed

      t.timestamps
    end
  end
end
