class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :token, unique:true, null:false, index: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
