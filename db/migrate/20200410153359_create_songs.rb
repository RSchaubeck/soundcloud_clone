class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :artist_id
      t.timestamps
    end
    add_index :songs, :artist_id
  end
end
